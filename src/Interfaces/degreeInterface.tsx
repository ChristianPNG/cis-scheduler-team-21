import { Course } from "./Courses";

export interface degreeProps {
    planCourses: Course[];
    concentration: string;
    //setDegreeReq: (degree: JSX.Element) => void;
}
