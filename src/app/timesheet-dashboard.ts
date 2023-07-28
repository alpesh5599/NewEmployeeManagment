export class TimesheetDashboard{
    id!:number;
    projectName!:string;
    taskName!:string;
    date= new Date();
    hours: Array<HoursofWeek> = [];
    totalHours!:number;
}

export class HoursofWeek{
    monHours!:number;
    tueHours!:number;
    wedHours!:number;
    thuHours!:number;
    friHours!:number;
    satHours!:number;
    sunHours!:number;
}