import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Frontend Developer",
    status: "Live",
    datePosted: "12 Jan 2024",
    dueDate: "12 Sep 2024",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];

export const JOB_APPLICANT_COLUMNS: string[] = ["Name", "Applied"];

export const JOB_APPLICANTS_DATA = [
  {
    name: "Dharma",
    appliedDate: "25 Mar 2024",
  },
];
