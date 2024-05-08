import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/login';
import AdminManage from './pages/admin_manage';
import CorrectExam from './pages/correct_exam';
import CorrectExamList from './pages/correct_exam_list';
import Exam from './pages/exam';
import ExamHistory from './pages/exam_history';
import ExamSelect from './pages/exam_select';
import PersonInfo from './pages/person_info';
import ReadExam from './pages/read_exam';
import StudentManage from './pages/student_manage';
import SubjectAdd from './pages/subject_add';
import SubjectManage from './pages/subject_manage';

import Layout from './common_components/layout';
import './App.scss';
import { routersData } from './config';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={routersData.login.path} />}></Route>
        {/* 页面1： 登录 */}
        <Route path={routersData.login.path} element={<Login />}></Route>
        {/* 页面2： 管理员管理 （超级管理员） */}
        <Route path={routersData.admin_manage.path} element={<AdminManage />}></Route>
        {/* 页面3： 批改试卷 （管理员） */}
        <Route path={routersData.correct_exam.path} element={<CorrectExam />}></Route>
        {/* 页面4： 批阅试卷列表 （管理员） */}
        <Route path={routersData.correct_exam_list.path} element={<CorrectExamList />}></Route>
        {/* 页面5： 考试 （学生） */}
        <Route path={routersData.exam.path} element={<Exam />}></Route>
        {/* 页面6： 学生考试记录 （学生） */}
        <Route path={routersData.exam_history.path} element={<ExamHistory />}></Route>
        {/* 页面7： 考题选择 （学生） */}
        <Route path={routersData.exam_select.path} element={<ExamSelect />}></Route>
        {/* 页面8： 个人信息录入 （学生 管理员） */}
        <Route path={routersData.person_info.path} element={<PersonInfo />}></Route>
        {/* 页面9： 查看试卷 （学生 管理员） */}
        <Route path={routersData.read_exam.path} element={<ReadExam />}></Route>
        {/* 页面10： 学生管理 （管理员） */}
        <Route path={routersData.student_manage.path} element={<StudentManage />}></Route>
        {/* 页面11： 考题录入 （管理员） */}
        <Route path={routersData.subject_add.path} element={<SubjectAdd />}></Route>
        {/* 页面12： 课程管理 （管理员） */}
        <Route path={routersData.subject_manage.path} element={<SubjectManage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
