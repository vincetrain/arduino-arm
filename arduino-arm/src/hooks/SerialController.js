export async function selectDevice() {
	let device = await navigator.serial.requestPort()
		.catch(err => { console.error(err) });
  try {
    await device.open({ baudRate: 38400 });
  } 
  catch(e) {
    console.error(e);
    return null;
  }

  write(device, 'RESET');

  return device;
}

export async function write(device, data) {
  const encoder = new TextEncoder();
  const writer = device.writable.getWriter();
  await writer.write(encoder.encode(data));
  writer.releaseLock();
}