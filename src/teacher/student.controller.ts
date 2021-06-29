import { Controller, Get, Post, Put, Param } from "@nestjs/common";
import { StudentService } from "../student/student.service";
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly StudentService: StudentService) {}

    @Get()
    getStudentsByTeacherId(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDto[] {
        return this.StudentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return this.StudentService.updateStudentTeacher(teacherId, studentId);
    }
    
}
