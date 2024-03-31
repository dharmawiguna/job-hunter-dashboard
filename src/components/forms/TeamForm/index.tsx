import FieldInput from "@/components/organisms/FieldInput";
import { LinkedinIcon } from "lucide-react";
import { FC } from "react";
import { BsInstagram } from "react-icons/bs";
import DialogAddTeam from "./DialogAddTeam";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">2 Members</div>
          <DialogAddTeam />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {[0, 1, 2].map((item: number) => (
            <div key={item} className="p-3 shadow text-center">
              <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
              <div className="mt-4 font-semibold">Dharma Wiguna</div>
              <div className="text-sm text-gray-500">CEO</div>

              <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                <BsInstagram className="w-6 h-6" />
                <LinkedinIcon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
