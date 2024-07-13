import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera,useCameraPermissions } from 'expo-camera';

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: Camera.Constants.VideoQuality['720p'] };
        const data = await cameraRef.current.recordAsync(options);
        console.log('Video recorded:', data.uri);
      } catch (error) {
        console.error('Error recording video:', error);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.8, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log('Photo taken:', data.uri);
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
    else{
        console.error("error in ref")
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePhoto}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
          <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
