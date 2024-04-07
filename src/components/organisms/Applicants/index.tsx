"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANTS_DATA } from "@/constants";
import { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";
import { Applicant } from "@prisma/client";

interface ApplicantsProps {
  applicants: any;
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
              <>
                <TableHead key={i}>{item}</TableHead>
              </>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants && (
            <>
              {applicants.map((item: any, i: number) => (
                <TableRow key={item.id + 1}>
                  <TableCell>{item.user.name}</TableCell>
                  <TableCell>
                    <ButtonActionTable url="/" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
