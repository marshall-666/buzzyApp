
//copy one of these block into your file, set the value at '', 
// use useEffect to track the dbResult and operate it accordlingly.



//========================================
//  Register New User
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var registerUser = {
    op:'register_user',
    fb_uid: '',
    uname: '',
    psword: '',
    email: '',
    org: '',
    pro: '',
    img_url: '',
}

talktoserver(registerUser).then((rd) => {
    setDbResult(rd)
})



//================================================
//  Upload Firebase uid to DB and get the pair ID
//================================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var auth = {
    op: 'auth',
    fb_uid: '',
}

talktoserver(auth).then((rd) => {
    setDbResult(rd)
})



//========================================
//  Create Group
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var createGroup = {
    op: 'create_group',
    gname: '',
    descrip: '',
    member_id: '',
    is_admin: '',
    invi_mems: '',
}

talktoserver(createGroup).then((rd) => {
    setDbResult(rd)
})




//========================================
//  Load Group List
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var loadGroupList = {
    op: 'get_group_ls',
    user_id: '',
}

talktoserver(loadGroupList).then((rd) => {
    setDbResult(rd)
})



//========================================
//  Load Group Member Detail
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var loadMemberDetail = {
    op: 'get_mem_detail',
    m_id: '',
}

talktoserver(loadMemberDetail).then((rd) => {
    setDbResult(rd)
})





//========================================
//  Add Member to A Group
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var addMember = {
    op: 'add_member',
    m_id: '',
    group_id: '',
    is_admin: '',
}

talktoserver(addMember).then((rd) => {
    setDbResult(rd)
})





//========================================
//  Create Task
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var createTask = {
    op: 'create_task',
    tkname: '',
    descrip: '',
    category_id: '',
    start_t: '',
    end_t: '',
    loca: '',
    group_id: '',
    user_id: '',
}

talktoserver(createTask).then((rd) => {
    setDbResult(rd)
})





//========================================
//  Load Task List (to calender)
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var loadTaskList = {
    op: 'get_tasks_ls',
    user_id: '',
}

talktoserver(loadTaskList).then((rd) => {
    setDbResult(rd)
})




//========================================
//  Load Task Detail
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var loadTaskDetail = {
    op: 'get_task_detail',
    tk_id: '',
}

talktoserver(loadTaskDetail).then((rd) => {
    setDbResult(rd)
})




//=======================================
//  Update Task
//========================================

import talktoserver from "../api/talktoserver"

const [dbResult, setDbResult] = useState()

var updateTask = {
    op: 'update_task',
    tk_id: '',
    tkname: '',
    descrip: '',
    category_id: '',
    start_t: '',
    end_t: '',
    loca: '',
    group_id: '',
    user_id: '',
}

talktoserver(updateTask).then((rd) => {
    setDbResult(rd)
})




//========================================
//  Add Chat
//========================================

import talktoserver from "../api/talktoserver"


const [dbResult, setDbResult] = useState()

var addChat = {
    op: 'add_msg',
    sender_id: '',
    group_id: '',
    message: '',
}

talktoserver(addChat).then((rd) => {
    setDbResult(rd)
})




//=======================================
//  Load Chats
//=======================================

import talktoserver from "../api/talktoserver"


const [dbResult, setDbResult] = useState()

var loadChats = {
    op: 'load_msgls',
    user_id: '',
    group_id: '',
}

talktoserver(loadChats).then((rd) => {
    setDbResult(rd)
})

//=======================================
//  Load Chat room groups
//=======================================

import talktoserver from "../api/talktoserver"


const [dbResult, setDbResult] = useState()

var loadChatGroups = {
    op: 'load_chatgroups',
    user_id: '',
}

talktoserver(loadChatGroups).then((rd) => {
    setDbResult(rd)
})

//======================================
//  Load all group members time slots
//=======================================

import talktoserver from "../api/talktoserver"


const [dbResult, setDbResult] = useState()

var loadSlots = {
    op: 'load_slot',
    group_id: '',
}

talktoserver(loadSlots).then((rd) => {
    setDbResult(rd)
})

//======================================
//  Load two members time slots
//=======================================

import talktoserver from "../api/talktoserver"


const [dbResult, setDbResult] = useState()

var indiSlots = {
    op: 'indi_slot',
    user_id: '',
    subject_id: '',
}

talktoserver(indiSlots).then((rd) => {
    setDbResult(rd)
})

//=======================================