import API_URL from './api.js'

const talktoserver = (param) => {
    
    switch(param.op) {
        case 'register_user':
            var regis_user = new FormData()
            regis_user.append('op', param.op)
            regis_user.append('fb_uid', param.fb_uid)
            regis_user.append('uname', param.uname)
            regis_user.append('psword', param.psword)
            regis_user.appent('email', param.email)
            regis_user.append('org', param.org)
            regis_user.append('pro', param.pro)
            regis_user.append('img_url', param.img_url)
            letstalk(API_URL, regis_user)
            break
        case 'auth':
            var auth_u = new FormData()
            auth_u.append('op', param.op)
            auth_u.append('fb_uid', param.fb_uid)
            letstalk(API_URL, auth_u)
            break
        case 'create_group':
            var create_g = new FormData()
            create_g.append('op', param.op)
            create_g.append('gname', param.gname)
            create_g.append('descrip', param.descrip)
            create_g.append('member_id', param.member_id)
            create_g.append('is_admin', param.is_admin)
            letstalk(API_URL, create_g)
            break
        case 'get_group_ls':
            var get_gls = new FormData()
            get_gls.append('op', param.op)
            get_gls.append('user_id', param.user_id)
            letstalk(API_URL, get_gls)
            break
        case 'get_mem_detail':
            var mem_detail = new FormData()
            mem_detail.append('op', param.op)
            mem_detail.append('m_id', param.m_id)
            letstalk(API_URL, mem_detail)
            break
        case 'add_member':
            var addmember = new FormData()
            addmember.append('op', param.op)
            addmember.append('m_id', param.m_id)
            addmember.append('group_id', param.group_id)
            addmember.append('is_admin', param.is_admin)
            letstalk(API_URL, addmember)
            break
        case 'create_task':
            var createtk = new FormData()
            createtk.append('op', param.op)
            createtk.append('tkname', param.tkname)
            createtk.append('descrip', param.descrip)
            createtk.append('category_id', param.category_id)
            createtk.append('start_t', param.start_t)
            createtk.append('end_t', param.end_t)
            createtk.append('loca', param.loca)
            createtk.append('group_id', param.group_id)
            createtk.append('user_id', param.user_id)
            letstalk(API_URL, createtk)
            break
        case 'get_tasks_ls':
            var get_tkls = new FormData()
            get_tkls.append('op', param.op)
            get_tkls.append('user_id', param.user_id)
            letstalk(API_URL, get_tkls)
            break
        case 'get_task_detail':
            var get_tkdetail = new FormData()
            get_tkdetail.append('op', param.op)
            get_tkdetail.append('tk_id', param.tk_id)
            letstalk(API_URL, get_tkdetail)
            break
        case 'update_task':
            var update_tk = new FormData()
            update_tk.append('op', param.op)
            update_tk.append('tk_id', param.tk_id)
            update_tk.append('tkname', param.tkname)
            update_tk.append('descrip', param.descrip)
            update_tk.append('category_id', param.category_id)
            update_tk.append('start_t', param.start_t)
            update_tk.append('end_t', param.end_t)
            update_tk.append('loca', param.loca)
            update_tk.append('group_id', param.group_id)
            update_tk.append('user_id', param.user_id)
            letstalk(API_URL, update_tk)
            break
        case 'add_msg':
            var add_msg = new FormData()
            add_msg.append('op', param.op)
            add_msg.append('sender_id', param.sender_id)
            add_msg.append('group_id', param.group_id)
            add_msg.append('message', param.message)
            letstalk(API_URL, add_msg)
            break
        case 'load_msgls':
            var load_chat = new FormData()
            load_chat.append('op', param.op)
            load_chat.append('user_id', param.user_id)
            load_chat.append('group_id', param.group_id)
            letstalk(API_URL, load_chat)
            break
        default:
            console.log('No such operation!')                

    }


    const letstalk = async (url, d) => {
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: d,
            })
            if(!response.ok) throw Error('Did not receive data.')
            const resData = await response.json()
            return resData
        } catch(err) {
            console.log(err.message)
        } 
    }
}

export default talktoserver



