import API_URL from './api.js'

//import talktoserver in your file
//set the var value in the var copy from FetchDataFormats.js
//call talktoserver and put the var as a parameter
//use useEffect to track the dbResult and operate accordingly

const talktoserver = async (param) => {

    var dataRqInbox = new FormData()

    if(param.op == 'register_user'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('fb_uid', param.fb_uid)
        dataRqInbox.append('uname', param.uname)
        dataRqInbox.append('psword', param.psword)
        dataRqInbox.append('email', param.email)
        dataRqInbox.append('org', param.org)
        dataRqInbox.append('pro', param.pro)
        dataRqInbox.append('img_url', param.img_url)

    } else if(param.op == 'auth'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('fb_uid', param.fb_uid)

    } else if(param.op == 'create_group'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('gname', param.gname)
        dataRqInbox.append('descrip', param.descrip)
        dataRqInbox.append('member_id', param.member_id)
        dataRqInbox.append('is_admin', param.is_admin)
        dataRqInbox.append('invi_mems', param.invi_mems)

    } else if(param.op == 'get_group_ls'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('user_id', param.user_id)  

    } else if(param.op == 'get_mem_detail'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('m_id', param.m_id) 

    } else if(param.op == 'add_member'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('m_id', param.m_id)
        dataRqInbox.append('group_id', param.group_id)
        dataRqInbox.append('is_admin', param.is_admin)

    } else if(param.op == 'create_task'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('tkname', param.tkname)
        dataRqInbox.append('descrip', param.descrip)
        dataRqInbox.append('category_id', param.category_id)
        dataRqInbox.append('start_t', param.start_t)
        dataRqInbox.append('end_t', param.end_t)
        dataRqInbox.append('loca', param.loca)
        dataRqInbox.append('group_id', param.group_id)
        dataRqInbox.append('user_id', param.user_id)

    } else if(param.op == 'get_tasks_ls'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('user_id', param.user_id)

    } else if(param.op == 'get_task_detail'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('tk_id', param.tk_id)

    } else if(param.op == 'update_task'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('tk_id', param.tk_id)
        dataRqInbox.append('tkname', param.tkname)
        dataRqInbox.append('descrip', param.descrip)
        dataRqInbox.append('category_id', param.category_id)
        dataRqInbox.append('start_t', param.start_t)
        dataRqInbox.append('end_t', param.end_t)
        dataRqInbox.append('loca', param.loca)
        dataRqInbox.append('group_id', param.group_id)
        dataRqInbox.append('user_id', param.user_id)

    } else if(param.op == 'add_msg'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('sender_id', param.sender_id)
        dataRqInbox.append('group_id', param.group_id)
        dataRqInbox.append('message', param.message)

    } else if(param.op == 'load_msgls'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('user_id', param.user_id)
        dataRqInbox.append('group_id', param.group_id)

    } else if(param.op == 'load_slot'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('group_id', param.group_id)

    } else if(param.op =='indi_slot'){

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('user_id', param.user_id)
        dataRqInbox.append('subject_id', param.subject_id)
        
    } else if(param.op == 'load_chatgroups') {

        dataRqInbox.append('op', param.op)
        dataRqInbox.append('user_id', param.user_id)

    }

    const response = await fetch(API_URL, {
        method: 'POST',
        body: dataRqInbox,
    })
    if(!response.ok) throw Error('Did not receive data.')
    return await response.json()

}

export default talktoserver