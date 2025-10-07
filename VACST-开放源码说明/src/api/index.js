// API基础配置
const API_BASE_URL = import.meta.env.PROD 

// 请求封装
async function request(url, options = {}) {
  const token = localStorage.getItem('token')
  
  // 统一使用 VA API
  const baseURL = API_BASE_URL
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }
  
  if (token && !options.noAuth) {
    headers['Authorization'] = `Bearer ${token}`
  }
  
  try {
    const response = await fetch(`${baseURL}${url}`, {
      ...options,
      headers
    })
    
    const data = await response.json()
    
    if (response.ok) {
      return data
    } else {
      if (response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('user_info')
        
        if (window.location.pathname !== '/login') {
          window.location.href = '/login'
        }
        
        throw new Error('登录已过期，请重新登录')
      }
      
      throw new Error(data.message || '请求失败')
    }
  } catch (error) {
    console.error('API请求错误:', error)
    throw error
  }
}

export default {
  get(url, params = {}, options = {}) {
    const query = new URLSearchParams(params).toString()
    const fullUrl = query ? `${url}?${query}` : url
    
    return request(fullUrl, {
      ...options,
      method: ''
    })
  },
  post(url, data = {}, options = {}) {
    return request(url, {
      ...options,
      method: '',
      body: JSON.stringify(data)
    })
  },
  
  put(url, data = {}, options = {}) {
    return request(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    })
  },
  
  patch(url, data = {}, options = {}) {
    return request(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data)
    })

  delete(url, options = {}) {
    return request(url, {
      ...options,
      method: 'DELETE'
    })
  }
}

