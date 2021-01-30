import React, { useEffect, useRef, useState } from 'react';

export default function BusinessViewPhotoSlider({
    media=[
        {
          "fieldname": "images",
          "originalname": "house.jpg",
          "encoding": "7bit",
          "mimetype": "image/jpeg",
          "size": 27316,
          "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
          "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
          "acl": "public-read",
          "contentType": "image/jpeg",
          "contentDisposition": null,
          "storageClass": "STANDARD",
          "serverSideEncryption": null,
          "metadata": {
            "uploaded-file": "house.jpg"
          },
          "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
          "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
          "versionId": null
        },
        {
          "fieldname": "images",
          "originalname": "house1.jpg",
          "encoding": "7bit",
          "mimetype": "image/jpeg",
          "size": 107111,
          "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
          "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
          "acl": "public-read",
          "contentType": "image/jpeg",
          "contentDisposition": null,
          "storageClass": "STANDARD",
          "serverSideEncryption": null,
          "metadata": {
            "uploaded-file": "house1.jpg"
          },
          "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
          "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
          "versionId": null
        },
        {
          "fieldname": "images",
          "originalname": "house3.jpg",
          "encoding": "7bit",
          "mimetype": "image/jpeg",
          "size": 26754,
          "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
          "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
          "acl": "public-read",
          "contentType": "image/jpeg",
          "contentDisposition": null,
          "storageClass": "STANDARD",
          "serverSideEncryption": null,
          "metadata": {
            "uploaded-file": "house3.jpg"
          },
          "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
          "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
          "versionId": null
        },
        {
          "fieldname": "images",
          "originalname": "house4.jpg",
          "encoding": "7bit",
          "mimetype": "image/jpeg",
          "size": 235919,
          "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
          "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
          "acl": "public-read",
          "contentType": "image/jpeg",
          "contentDisposition": null,
          "storageClass": "STANDARD",
          "serverSideEncryption": null,
          "metadata": {
            "uploaded-file": "house4.jpg"
          },
          "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
          "etag": "\"611169f59c172c3d63ac655420c46544\"",
          "versionId": null
        },
        {
            "fieldname": "images",
            "originalname": "house.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 27316,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 107111,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house1.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house3.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 26754,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house3.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house4.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 235919,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house4.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "etag": "\"611169f59c172c3d63ac655420c46544\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 27316,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 107111,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house1.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house3.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 26754,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house3.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house4.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 235919,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house4.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "etag": "\"611169f59c172c3d63ac655420c46544\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 27316,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 107111,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house1.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house3.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 26754,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house3.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house4.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 235919,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house4.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "etag": "\"611169f59c172c3d63ac655420c46544\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 27316,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 107111,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house1.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house3.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 26754,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house3.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house4.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 235919,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house4.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "etag": "\"611169f59c172c3d63ac655420c46544\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 27316,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131517house.jpg",
            "etag": "\"2d0d569b3f743ddb217de10e5d4f6f6a\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 107111,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house1.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131518house1.jpg",
            "etag": "\"37aa9783151e44159842b68a07cc4ce0\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house3.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 26754,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house3.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131525house3.jpg",
            "etag": "\"327e6b508f6f688b29bc6e9e7ba596fd\"",
            "versionId": null
          },
          {
            "fieldname": "images",
            "originalname": "house4.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 235919,
            "bucket": "lbo-media/60107c4b9b8a5d0be9f69758",
            "key": "60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "acl": "public-read",
            "contentType": "image/jpeg",
            "contentDisposition": null,
            "storageClass": "STANDARD",
            "serverSideEncryption": null,
            "metadata": {
              "uploaded-file": "house4.jpg"
            },
            "location": "https://lbo-media.s3.us-west-1.amazonaws.com/60107c4b9b8a5d0be9f69758/60107c4b9b8a5d0be9f697581611693131526house4.jpg",
            "etag": "\"611169f59c172c3d63ac655420c46544\"",
            "versionId": null
          }
      ]
}) {

    const [state, setState] = useState({
        rightButton: false,
        leftButton: false,
        scrollPosition: 0
    });

    const sliderRef = useRef();

    const checkScroll = () => {
        console.log('Checking scroll')
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollLeftMax) {
            setState(state => ({
                ...state,
                rightButton: false,
                leftButton: true
            }))
        }
        if (sliderRef.current.scrollLeft < sliderRef.current.scrollLeftMax ||
            sliderRef.current.scrollLeft === 0) {
            setState(state => ({
                ...state,
                rightButton: true,
                leftButton: false
            }))
        }
        if (sliderRef.current.scrollLeft !== 0) {
            setState(state => ({
                ...state,
                rightButton: true,
                leftButton: true
            }))
        }
    }

    useEffect(() => {
        if (state.scrollPosition === 0) {
            sliderRef.current.scrollLeft = 0;
            checkScroll();
        }
    }, [state.scrollPosition])


    const MediaItem = (item) => (
        <div className='business-view-media'>
            <img
                alt='Some alt text coming from item'
                src={item.item.location}
                style={{height: '100%', width: 'auto', objectFit: 'cover'}}
            />
        </div>
    )

    const renderMediaItems = () => {
        return media.splice(0, 20).map((item, index) => {
            return <MediaItem key={index} item={item} />
        })
    }

    const slideRight = () => {
        setState(state => ({...state, scrollPosition: 200}));
        sliderRef.current.scrollLeft += 200;
        checkScroll();
    }

    const slideLeft = () => {
        setState(state => ({...state, scrollPosition: 200}));
        sliderRef.current.scrollLeft -= 200;
        checkScroll();
    }

    console.log(sliderRef.current)
    console.log(state)

    return (
        <div className='media-slider-container'>
            <div className='business-view-media-slider' ref={sliderRef}>
                {renderMediaItems()}
            </div>
            <button 
                className={state.leftButton === true ? 'left-button' : 'left-button hidden'}
                onClick={slideLeft}
            >
                {"<"}
            </button>
            <button 
                className={state.rightButton === true ? 'right-button' : 'right-button hidden'}
                onClick={slideRight}
            >
                {">"}
            </button>
        </div>
    )
}