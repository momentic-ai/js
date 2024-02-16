async function updateRules() {
  // First, remove any existing rules
  await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1]});

  const headersToFilter = ["x-frame-options", "content-security-policy", "content-security-policy-report-only"]

  // Define a new rule to remove specific headers
  const rule = {
    id: 1,
    priority: 1,
    action: {
      type: 'modifyHeaders',
      responseHeaders: headersToFilter.map(header => 
        ({operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE, header}))
    },
    condition: {
      urlFilter: '|*|',
      resourceTypes: ['sub_frame']
    }
  };

  // Add the new rule
  await chrome.declarativeNetRequest.updateDynamicRules({addRules: [rule]});
}

// Call updateRules to initialize the rule setup
updateRules();
