import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "job title is required" })
    .min(80, { message: "job title must be at least 80 character" }),
  jobType: z.enum(JOBTYPES, { required_error: "Please select a job types" }),
  salaryFrom: z.string({ required_error: "Salary from is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "Please select category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skills at least have 1 skills" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(20, { message: "Job Description must be at least 20 character" }),
  responsibility: z
    .string({ required_error: "Resposibility is required" })
    .min(20, { message: "Resposibility must be at least 20 character" }),
  whoYouAre: z
    .string({ required_error: "Who You Are is required" })
    .min(20, { message: "Who You Are must be at least 20 character" }),
  niceToHave: z
    .string({ required_error: "Nice To Have is required" })
    .min(20, { message: "Nice To Have must be at least 20 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least have 1 benefit" }),
});
