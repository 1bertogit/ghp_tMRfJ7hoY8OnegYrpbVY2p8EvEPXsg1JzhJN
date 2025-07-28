import {z} from 'zod';

// Define the schema for the input of the case analysis flow
export const AnalyzeCaseInputSchema = z.object({
  title: z.string().describe('The title of the medical case.'),
  specialty: z.string().describe('The medical specialty of the case.'),
  imageDataUris: z.array(z.string()).nullable().describe("Optional photos of the case, as data URIs. Format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type AnalyzeCaseInput = z.infer<typeof AnalyzeCaseInputSchema>;

// Define the schema for the output of the case analysis flow
export const AnalyzeCaseOutputSchema = z.object({
  analysis: z.string().describe('A brief, expert analysis of the case, written from the perspective of a senior plastic surgeon.'),
});
export type AnalyzeCaseOutput = z.infer<typeof AnalyzeCaseOutputSchema>;
