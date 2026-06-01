const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // Add back the 3rd </div> for Partners, FAQ, CTA
    const items = ['Partners Section', 'FAQ Section', 'CTA Section', 'Advantages Section']; // wait, is Advantages Section listed? Error showed 1125, which is before Partners Section. That means Interactive Demos Section.
    // Error at 1125: before Partners Section (end of Interactive Demos Section)
    // Error at 1144: before FAQ Section (end of Partners Section)
    // Error at 1180: before CTA Section (end of FAQ Section)
    // Error at 1199: end of CTA Section
    const endMarkers = ['Partners Section', 'FAQ Section', 'CTA Section'];
    endMarkers.forEach(comment => {
        const regex = new RegExp(`<\\/div>\\s*<\\/div>\\s*<\\/section>\\s*{\\/\\* ${comment} \\*\\/}`, 'g');
        content = content.replace(regex, `</div>\n              </div>\n              </div>\n            </section>\n\n            {/* ${comment} */}`);
    });
    
    // For CTA section end
    content = content.replace(/<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*\);/g, `</div>\n              </div>\n              </div>\n            </section>\n        </div>\n\n      </div>\n    );`);

    fs.writeFileSync(filename, content);
}
fix('pages/OtelProjelerimizPage.tsx');
fix('pages/OtelCozumlerimizPage.tsx');
