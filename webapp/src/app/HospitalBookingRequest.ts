export interface HospitalBookingRequest {
    bloodGroup: string;
    state: string;
    area: string;
    pinCode: number;
    contactNo: number;
    hospitalName: string;
    date: Date;
    city: string;
    time: string;
}