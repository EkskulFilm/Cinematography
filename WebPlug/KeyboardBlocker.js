// Enhanced Script to Detect and Block Unauthorized Activities

(function() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Right-click is disabled to protect content.');
    });

    // Block common developer tools shortcuts
    document.addEventListener('keydown', function(e) {
        if (
            (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // View Source
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || // DevTools
            (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) || // Inspect Element
            (e.ctrlKey && e.key === 's') || // Save Page
            (e.key === 'F12') || // DevTools
            (e.ctrlKey && e.shiftKey && e.key === 'j') || // Console
            (e.ctrlKey && e.key === 'p') || // Print
            (e.key === 'PrintScreen') || // Screenshot
            (e.ctrlKey && e.key === 'a') || // Select All
            (e.ctrlKey && e.shiftKey && (e.key === 'k' || e.key === 'K')) || // Clear Console
            (e.ctrlKey && e.shiftKey && e.key === 'm') || // Network Tab
            (e.ctrlKey && e.key === 'e') || // Edit
            (e.metaKey && (e.key === 'u' || e.key === 's')) // MacOS equivalents
        ) {
            e.preventDefault();
            alert('Developer tools shortcuts are disabled to protect content.');
        }
    });

    // Detect if DevTools is opened
    const detectDevTools = function() {
        const threshold = 160;
        const check = setInterval(() => {
            if (
                window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold
            ) {
                document.body.innerHTML = "DevTools is disabled on this site.";
                clearInterval(check);
            }
        }, 1000);
    };
    detectDevTools();

    // Monitor unauthorized attempts to scrape or access content
    const unauthorizedActivity = function() {
        let unauthorizedCount = 0;
        document.addEventListener('keydown', function(e) {
            if (
                e.key === 'PrintScreen' || 
                (e.ctrlKey && e.key === 'p') || // Print
                (e.ctrlKey && e.key === 'd') // Save as PDF or Duplicate Tab
            ) {
                e.preventDefault();
                unauthorizedCount++;
                alert('Screenshots and printing are disabled.');

                if (unauthorizedCount > 2) {
                    document.body.innerHTML = '<h1>Access Denied</h1>';
                }
            }
        });
    };
    unauthorizedActivity();

    // Block content if iframe is detected (to prevent embedding)
    if (window.self !== window.top) {
        document.body.innerHTML = '<h1>Embedding this site is not allowed.</h1>';
    }

    // Additional monitoring for mouse-based attempts
    document.addEventListener('mousedown', function(e) {
        if (e.button === 1 || e.button === 2) { // Middle or Right-click
            e.preventDefault();
            alert('Mouse actions are restricted on this site.');
        }
    });
})();
