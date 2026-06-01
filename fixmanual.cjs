const fs = require('fs');
let content = fs.readFileSync('pages/OtelProjelerimizPage.tsx', 'utf8');

// Line 577 is the 4th line from 574.
// Let's just find and replace the extra div in the Guest Journey Section area
content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*{\/\* Guest Journey Section \*\//, `</div>\n              </div>\n            </section>\n\n            {/* Guest Journey Section */`);

content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*{\/\* 3 Core Pillars Section \*\//, `</div>\n              </div>\n            </section>\n\n            {/* 3 Core Pillars Section */`);

fs.writeFileSync('pages/OtelProjelerimizPage.tsx', content);

// Also do it for OtelCozumlerimizPage.tsx just in case
let content2 = fs.readFileSync('pages/OtelCozumlerimizPage.tsx', 'utf8');
content2 = content2.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*{\/\* Guest Journey Section \*\//, `</div>\n              </div>\n            </section>\n\n            {/* Guest Journey Section */`);
content2 = content2.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*{\/\* 3 Core Pillars Section \*\//, `</div>\n              </div>\n            </section>\n\n            {/* 3 Core Pillars Section */`);
fs.writeFileSync('pages/OtelCozumlerimizPage.tsx', content2);
