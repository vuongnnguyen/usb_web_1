let button = document.getElementById('request-device');
button.addEventListener('click', async () => {
    // navigator.usb.requestDevice({ filters: [{vendorId: 12714, product_id: 12290}] })
    // .then(device => {
    //     console.log(device)
    // console.log(device.productName);      // "Arduino Micro"
    // console.log(device.manufacturerName); // "Arduino LLC"
    // })
    // .catch(error => { console.error(error); });

    const device = await navigator.usb.requestDevice({ filters: [{vendorId: 12714, product_id: 12290}] });
    console.log(device.configuration);

  try {
    await device.open()
    await device.selectConfiguration(1) // configurationValue
    await device.claimInterface(0) // interfaceNumber
  } catch (error) {
    console.log(error);
  }


});

