//copy one of these var into your file, set the value at ''

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

var auth = {
    op: 'auth',
    fb_uid: '',
}

var createGroup = {
    op: 'create_group',
    gname: '',
    descrip: '',
    member_id: '',
    is_admin: '',
}

var loadGroupList = {
    op: 'get_group_ls',
    user_id: '',
}

var loadMemberDetail = {
    op: 'get_mem_detail',
    m_id: '',
}

var addMember = {
    op: 'add_member',
    m_id: '',
    group_id: '',
    is_admin: '',
}

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

var loadTaskList = {
    op: 'get_tasks_ls',
    user_id: '',
}

var loadTaskDetail = {
    op: 'get_task_detail',
    tk_id: '',
}

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

var addChat = {
    op: 'add_msg',
    sender_id: '',
    group_id: '',
    message: '',
}

var loadChats = {
    op: 'load_msgls',
    user_id: '',
    group_id: '',
}
