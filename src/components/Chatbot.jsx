import { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    // Only add the script if it's not already present
    const scriptId = 'ai_widget_script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'text/javascript'
      script.src =
        'https://backend.aistaffs.com/front-end/chat-box/embed.js?type=youAiStaff&staffId=2774&uld=6319&arId=0&arListId=0&icn=https://reeelapps-app.s3.us-west-2.amazonaws.com/aistaff/hire_staff_img/688e31a91becd.png&webUrl=https://www.hometownwebco.com/&embId=2194'
      script.async = true
      document.head.appendChild(script)
    }

    // Cleanup if the component is ever unmounted
    return () => {
      const oldScript = document.getElementById(scriptId)
      if (oldScript) oldScript.remove()
    }
  }, [])

  // The chat box must be in the DOM for the widget to mount!
  return <div id="aistaff_chat_box" />
}

export default Chatbot
