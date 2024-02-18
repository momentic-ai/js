async function updateRules() {
  // First, remove any existing rules
  await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [1] });

  const headersToFilter = [
    "x-frame-options",
    "content-security-policy",
    "content-security-policy-report-only",
  ];

  // Define a new rule to remove specific headers
  const rule = {
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      responseHeaders: headersToFilter.map((header) => ({
        operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
        header,
      })),
    },
    condition: {
      urlFilter: "|*|",
      resourceTypes: ["sub_frame"],
    },
  };

  // Add the new rule
  await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [rule] });
}

// Call updateRules to initialize the rule setup
updateRules();

function parseSetCookieString(setCookieString, requestDomain) {
  let cookieParts = setCookieString.split(";").map((part) => part.trim());
  let [name, value] = cookieParts[0].split("=");
  let cookieAttributes = {
    name: name,
    value: value,
    domain: requestDomain,
    path: "/",
    httpOnly: false,
    secure: false,
    sameSite: "lax",
  };

  // Parse each attribute
  cookieParts.slice(1).forEach((part) => {
    let [key, val] = part.split("=");
    switch (key.toLowerCase()) {
      case "domain":
        cookieAttributes.domain = val;
        break;
      case "path":
        cookieAttributes.path = val;
        break;
      case "expires":
        let expiresTime = new Date(val).getTime() / 1000;
        cookieAttributes.expirationDate = expiresTime;
        break;
      case "max-age":
        let maxAge = parseInt(val, 10);
        cookieAttributes.expirationDate = new Date().getTime() / 1000 + maxAge;
        break;
      case "secure":
        cookieAttributes.secure = true;
        break;
      case "httponly":
        cookieAttributes.httpOnly = true;
        break;
      case "samesite":
        cookieAttributes.sameSite = val.replace("-", "_").toLowerCase();
        break;
    }
  });

  return cookieAttributes;
}

chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    const url = new URL(details.initiator);
    const cookies = details.responseHeaders.filter((header) => {
      return header.name.toLowerCase() === "set-cookie";
    });
    cookies.forEach(({ value }) => {
      console.log(`Overriding cookie on '${details.initiator}'`, value);
      const attributes = parseSetCookieString(value, url.host);
      if (attributes.secure && attributes.sameSite === "none") {
        // already okay
        return;
      }
      chrome.cookies.set({
        ...attributes,
        url: details.initiator,
        secure: true,
        sameSite: "no_restriction",
      });
    });
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders", "extraHeaders"],
);
