import React from 'react'
import { Alert } from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';


export default function Camera() {
    return (
        <CameraScreen
            actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
            onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
            flashImages={{
                // optional, images for flash state
                on: require('../image/button.png'),
                off: require('../image/button.png'),
                auto: require('../image/button.png'),
            }}
            cameraFlipImage={require('../image/button.png')} // optional, image for flipping camera button
            captureButtonImage={require('../image/button.png')} // optional, image capture button
            torchOnImage={require('../image/button.png')} // optional, image for toggling on flash light
            torchOffImage={require('../image/button.png')} // optional, image for toggling off flash light
            hideControls={false} // (default false) optional, hides camera controls
            showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session

            scanBarcode={true}
            onReadCode={(event) => Alert.alert('Hello World')} // optional
            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
            laserColor='red' // (default red) optional, color of laser in scanner frame
            frameColor='white' // (default white) optional, color of border of scanner frame
        />
    )
}
