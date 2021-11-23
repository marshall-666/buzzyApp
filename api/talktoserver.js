import API_URL from './api.js'

const talktoserver = ({op, param}) => {
    
        switch(op) {
            case 'register_user':
                var regis_user = new FormData()
                regis_user.append('op', op)
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
                auth_u.append('op', op)
                auth_u.append('fb_uid', param.fb_uid)
                letstalk(API_URL, auth_u)
                break
            case 'create_group':
                var create_g = new FormData()
                create_g.append('op', op)
                create_g.append('gname', param.gname)
                create_g.append('descrip', param.descrip)
                create_g.append('member_id', param.member_id)
                create_g.append('is_admin', param.is_admin)
                letstalk(API_URL, create_g)
                break
                

        }


        
    
}

export default talktoserver


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

