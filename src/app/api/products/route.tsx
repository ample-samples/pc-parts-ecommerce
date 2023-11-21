// import caseaccessory from "../../../data/json/case-accessory.json"
import cases from "../../../data/json/case.json"
import casefan from "../../../data/json/case-fan.json"
import cpucooler from '../../../data/json/cpu-cooler.json'
import cpu from '../../../data/json/cpu.json'
import externalharddrive from '../../../data/json/external-hard-drive.json'
import fancontroller from '../../../data/json/fan-controller.json'
import headphones from '../../../data/json/headphones.json'
import internalharddrive from '../../../data/json/internal-hard-drive.json'
import keyboard from '../../../data/json/keyboard.json'
import memory from '../../../data/json/memory.json'
import monitor from '../../../data/json/monitor.json'
import motherboard from '../../../data/json/motherboard.json'
import mouse from '../../../data/json/mouse.json'
import opticaldrive from '../../../data/json/optical-drive.json'
import os from '../../../data/json/os.json'
import powersupply from '../../../data/json/power-supply.json'
import soundcard from '../../../data/json/sound-card.json'
import speakers from '../../../data/json/speakers.json'
import thermalpaste from '../../../data/json/thermal-paste.json'
import ups from '../../../data/json/ups.json'
import videocard from '../../../data/json/video-card.json'
import webcam from '../../../data/json/webcam.json'
import wirednetworkcard from '../../../data/json/wired-network-card.json'
import wirelessnetworkcard from '../../../data/json/wireless-network-card.json'

const categories = {
	// caseaccessory,
	cases,
	casefan,
	cpucooler,
	cpu,
	externalharddrive,
	fancontroller,
	headphones,
	internalharddrive,
	keyboard,
	memory,
	monitor,
	motherboard,
	mouse,
	opticaldrive,
	os,
	powersupply,
	soundcard,
	speakers,
	thermalpaste,
	ups,
	videocard,
	webcam,
	wirednetworkcard,
	wirelessnetworkcard,
}

type Category = keyof typeof categories

function allData(category?: Category | null) {
	if (category) {
		return JSON.stringify(categories[category])
	} else {
		return JSON.stringify([categories]);
	}
}

export async function GET(request: NextRequest) {
	console.log(request.nextUrl.searchParams)


	return new Response(request.nextUrl.searchParams.get('category') ? allData(request.nextUrl.searchParams.get('category') as Category) : allData())
}
