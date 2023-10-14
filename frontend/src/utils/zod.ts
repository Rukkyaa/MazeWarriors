import { z } from 'zod';
import zodErrorTexts from './zodErrorsTexts';


const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.message) return { message: issue.message };

  if (issue.code === z.ZodIssueCode.invalid_string) {
    if (issue.validation === 'email') {
      return { message: zodErrorTexts.invalidEmail };
    }
  }

  return { message: ctx.defaultError };
};

export const initZod = () => {
  z.setErrorMap(customErrorMap);
}