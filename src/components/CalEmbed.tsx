"use client"  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
  
  export default function CalFloatingButton() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("floatingButton", {"calLink":"andrew-coderre/cleaning-template-onboarding","buttonColor":"#059669","buttonText":"Learn more"});
		cal("ui", {"styles":{"branding":{"brandColor":"#059669"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  };
  