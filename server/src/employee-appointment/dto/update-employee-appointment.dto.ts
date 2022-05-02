export interface UpdateEmployeeAppointmentDto {
    id: number;
    PersonId: number;
    EmployeePositionId: number;
    AreaId?: number | null;
    BrigadeId?: number | null;
    AppointmentDate: Date;
    DismissalDate?: Date;
}