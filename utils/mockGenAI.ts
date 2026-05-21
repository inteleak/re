export const Type = {
  STRING: 'string',
  OBJECT: 'object',
  ARRAY: 'array',
  NUMBER: 'number',
  BOOLEAN: 'boolean'
};

export class GoogleGenAI {
  models: any;
  
  constructor(config: { apiKey: string }) {
    this.models = {
      generateContent: async (params: { model: string, contents: string, config?: any }) => {
        // Mock a standard response format or schema format if requested
        if (params.config?.responseSchema && params.config?.responseMimeType === 'application/json') {
          // Attempt to return a valid dummy JSON matching the schema if possible...
          // For simplicity we'll just check common ones
          if (params.contents.includes("kayıp (churn) riskini")) {
            return { text: JSON.stringify({ risk: "Orta", reason: "API servisleri geçici olarak devre dışı bırakıldığı için risk hesaplanamadı." }) };
          }
          if (params.contents.includes("duygu durumu")) {
             return { text: JSON.stringify({ score: 5, confidence: "Medium", explanation: "Servis devre dışı." }) };
          }
          if (params.contents.includes("spam analizi")) {
             return { text: JSON.stringify({ isSpam: false, probability: 0, reason: "Servis devre dışı." }) };
          }
          if (params.contents.includes("puanla (0-100)")) {
             return { text: JSON.stringify({ score: 50, explanation: "Servis devre dışı." }) };
          }
          if (params.contents.includes("durumunu belirle")) {
             return { text: JSON.stringify({ status: "Potansiyel" }) };
          }

          // Fallback object to not crash JSON.parse
          return { text: JSON.stringify({ text: "Analiz verilemiyor.", result: "Devre dışı", message: "Devre dışı", risk: "Biliinmiyor", reason: "Bilinmiyor" }) };
        }
        
        return {
          text: "API servisleri şimdilik pasife alınmıştır."
        };
      }
    };
  }
}
