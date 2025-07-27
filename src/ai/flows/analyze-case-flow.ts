'use server';
/**
 * @fileOverview An AI flow to analyze medical cases.
 *
 * - analyzeCase - A function that handles the case analysis process.
 * - AnalyzeCaseInput - The input type for the analyzeCase function.
 * - AnalyzeCaseOutput - The return type for the analyzeCase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

// Define the schema for the input of the case analysis flow
export const AnalyzeCaseInputSchema = z.object({
  title: z.string().describe('The title of the medical case.'),
  specialty: z.string().describe('The medical specialty of the case.'),
  imageDataUri: z.string().nullable().describe("An optional photo of the case, as a data URI. Format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type AnalyzeCaseInput = z.infer<typeof AnalyzeCaseInputSchema>;

// Define the schema for the output of the case analysis flow
export const AnalyzeCaseOutputSchema = z.object({
  analysis: z.string().describe('A brief, expert analysis of the case, written from the perspective of a senior plastic surgeon.'),
});
export type AnalyzeCaseOutput = z.infer<typeof AnalyzeCaseOutputSchema>;


/**
 * A wrapper function that invokes the Genkit flow for analyzing a medical case.
 * @param input The details of the medical case to be analyzed.
 * @returns A promise that resolves to the AI-generated analysis.
 */
export async function analyzeCase(input: AnalyzeCaseInput): Promise<AnalyzeCaseOutput> {
  return analyzeCaseFlow(input);
}


// Define the Genkit prompt for the AI model
const analyzeCasePrompt = ai.definePrompt({
  name: 'analyzeCasePrompt',
  input: {schema: AnalyzeCaseInputSchema},
  output: {schema: AnalyzeCaseOutputSchema},
  prompt: `
    Você é o Dr. Genkit, um cirurgião plástico sênior de renome mundial, conhecido por sua perspicácia e objetividade.
    Sua tarefa é fornecer uma análise inicial concisa e especializada para o caso clínico submetido.

    Seja direto, profissional e forneça insights valiosos que um especialista ofereceria.
    Sua análise deve ter cerca de 2-3 frases.

    Detalhes do Caso:
    - Título: {{{title}}}
    - Especialidade: {{{specialty}}}

    {{#if imageDataUri}}
    - Imagem Anexada: {{media url=imageDataUri}}
    Use a imagem como referência principal para sua análise.
    {{else}}
    Baseie sua análise apenas no título e na especialidade fornecidos.
    {{/if}}

    Forneça sua análise no campo 'analysis'.
  `,
});


// Define the Genkit flow that orchestrates the analysis process
const analyzeCaseFlow = ai.defineFlow(
  {
    name: 'analyzeCaseFlow',
    inputSchema: AnalyzeCaseInputSchema,
    outputSchema: AnalyzeCaseOutputSchema,
  },
  async (input) => {
    const {output} = await analyzeCasePrompt(input);
    return output!;
  }
);
