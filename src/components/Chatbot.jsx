import { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const scriptId = 'ai_widget_script'
    const existingScript = document.getElementById(scriptId)

    if (!existingScript) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'text/javascript'
      script.src =
        'https://backend.aistaffs.com/front-end/chat-box/embed.js?type=youAiStaff&staffId=2774&uld=6319&arlId=0&arListId=0&icn=https://reeelapps-app.s3.us-west-2.amazonaws.com/aistaff/hire_staff_img/688e31a91becd.png&webUrl=https://www.hometownwebco.com/&embId=2194'
      script.async = true
      document.body.appendChild(script)
    }

    return () => {
      const oldScript = document.getElementById(scriptId)
      if (oldScript) oldScript.remove()
    }
  }, [])

  return null // No visible element needed
}

export default Chatbot
