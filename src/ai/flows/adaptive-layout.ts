// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI agent that adjusts the project display based on inferred user preferences.
 *
 * - adjustLayout - A function that adjusts the project display.
 * - AdjustLayoutInput - The input type for the adjustLayout function.
 * - AdjustLayoutOutput - The return type for the adjustLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustLayoutInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the user\u0027s project preferences.'),
  projectDetails: z
    .string()
    .describe('Details of the projects to be displayed.'),
});
export type AdjustLayoutInput = z.infer<typeof AdjustLayoutInputSchema>;

const AdjustLayoutOutputSchema = z.object({
  adjustedLayout: z
    .string()
    .describe('The adjusted layout of the projects based on user preferences.'),
});
export type AdjustLayoutOutput = z.infer<typeof AdjustLayoutOutputSchema>;

export async function adjustLayout(input: AdjustLayoutInput): Promise<AdjustLayoutOutput> {
  return adjustLayoutFlow(input);
}

const adjustLayoutPrompt = ai.definePrompt({
  name: 'adjustLayoutPrompt',
  input: {schema: AdjustLayoutInputSchema},
  output: {schema: AdjustLayoutOutputSchema},
  prompt: `You are an expert web designer specializing in creating adaptive layouts based on user preferences.

You will use this information to adjust the project display, and order the projects accordingly.

User Preferences: {{{userPreferences}}}
Project Details: {{{projectDetails}}}`,
});

const adjustLayoutFlow = ai.defineFlow(
  {
    name: 'adjustLayoutFlow',
    inputSchema: AdjustLayoutInputSchema,
    outputSchema: AdjustLayoutOutputSchema,
  },
  async input => {
    const {output} = await adjustLayoutPrompt(input);
    return output!;
  }
);
