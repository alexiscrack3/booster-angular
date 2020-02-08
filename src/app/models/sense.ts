export class Sense {
  definition: string;
  examples: string[];

  constructor(
    definition: string,
    examples: string[] = []
  ) {
    this.definition = definition;
    this.examples = examples;
  }
}
