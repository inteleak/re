const fs = require('fs');

function swapSections(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    const oldWayIndex = content.indexOf('{/* The Old Way vs The Mortanas Way Section */}');
    const includedServicesIndex = content.indexOf('{/* Included Services Section */}');
    const guestJourneyIndex = content.indexOf('{/* Guest Journey Section */}');
    const threeCoreIndex = content.indexOf('{/* 3 Core Pillars Section */}');

    if (oldWayIndex === -1 || includedServicesIndex === -1 || guestJourneyIndex === -1 || threeCoreIndex === -1) {
        console.error('Could not find all sections in', filePath);
        return;
    }

    // Extractor
    const theOldWayStr = content.substring(oldWayIndex, includedServicesIndex);
    const includedServicesStr = content.substring(includedServicesIndex, guestJourneyIndex);
    const guestJourneyStr = content.substring(guestJourneyIndex, threeCoreIndex);

    // Swap: (Included Services + Guest Journey) THEN (The Old Way vs The Mortanas Way)
    // Reduce gap between Included Services and Guest Journey:
    // They are currently separated by </section>\n\n            {/* Guest Journey Section */}
    // Let's replace gap for them by modifying the space in between if any.
    // Actually, space-y-2 on wrapper handles spacing. But we can ensure py-0 mt-0 etc.
    
    // Removing any <section px-8 py-0> classes to reduce space if possible, or we can just apply -mt-something
    // Let's just do the swap first.

    const newContent = content.substring(0, oldWayIndex)
        + includedServicesStr
        + guestJourneyStr
        + theOldWayStr
        + content.substring(threeCoreIndex);

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log('Swapped in', filePath);
}

try { swapSections('pages/OtelCozumlerimizPage.tsx'); } catch(e) {}
try { swapSections('pages/OtelProjelerimizPage.tsx'); } catch(e) {}
