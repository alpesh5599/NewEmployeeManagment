import { CandidateStatus } from "./candidateStatus";

export class CandidateModel {
    // id!:number;
    // applyingPosition!: string;
    // candidateFirstName!: string;
    // candidateLastName!: string;
    // candidateEmail!: string;
    // candidatePhoneNo!: string;
    // candidateSkills!: string;
    // joiningAvailability!: string;
    // fileName!: string;
    // comments!: string;

    id!: number;
    position!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    contact!: number;
    skills!: string;
    joining!: string;
    comments!: string;
    fileName!: string;
    candidateStatus!:CandidateStatus;
}