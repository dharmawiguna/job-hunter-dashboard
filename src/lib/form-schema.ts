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

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Images is required" }),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.date({ required_error: "Date Founded is required" }),
  techStack: z
    .string({ required_error: "Tech stack is required" })
    .array()
    .nonempty({ message: "Tech stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});
