import { useEffect, useMemo, useRef } from 'react'
import { SpinePlayer } from '@esotericsoftware/spine-player'
import { SpinePlayer as SpinePlayer4_1 } from '@esotericsoftware/spine-player-4.1'

enum globalParams {
  NIKKE_DB = 'https://nikke-db-legacy.pages.dev/',
  PATH_L2D = NIKKE_DB + 'l2d/',
  PATH_L2D_AIM = 'aim/',
  PATH_L2D_COVER = 'cover/',
}

const getPathing = (
  currentId: string,
  extension: string,
  currentPose: 'aim' | 'cover' | 'default' = 'default',
) => {
  let route = globalParams.PATH_L2D + currentId + '/'
  let fileSuffix = '_00.'

  // could be more automated if we set market.live2d.current_pose to '' if we select
  // "full body" but I'd rather keep fb for future/other functions
  switch (currentPose) {
    case 'aim':
      route += globalParams.PATH_L2D_AIM
      fileSuffix = '_aim' + fileSuffix
      break
    case 'cover':
      route += globalParams.PATH_L2D_COVER
      fileSuffix = '_cover' + fileSuffix
      break
    default:
      break
  }

  route += currentId + fileSuffix + extension

  return route
}

interface Live2DProps {
  currentId: string
}

export function Live2D(props: Live2DProps) {
  const { currentId } = props

  const skelUrl = useMemo(() => getPathing(currentId, 'skel'), [currentId])
  const atlasUrl = useMemo(() => getPathing(currentId, 'atlas'), [currentId])

  const containerRef = useRef<HTMLDivElement>(null)

  const onSuccess = (player: SpinePlayer | SpinePlayer4_1) => {
    containerRef.current?.addEventListener('click', () => {
      player.animationState?.setAnimation(0, 'action', false)
      player.animationState?.addAnimation(0, 'idle', true, 0)
    })
  }

  const fetchL2D = async (url: string) => {
    const response = await fetch(url)
    const data = await response.arrayBuffer()

    const unit8 = new Uint8Array(data)

    // Take the first 16 bytes
    const versionBytes = unit8.slice(0, 16)

    // Extract and decode version string
    const versionString = new TextDecoder().decode(versionBytes).replace(/\\0/g, '')

    if (/4\.0\.\d+/.test(versionString)) {
      new SpinePlayer('player-container', {
        preserveDrawingBuffer: true,
        showControls: false,
        binaryUrl: skelUrl,
        atlasUrl: atlasUrl,
        animation: 'idle',
        premultipliedAlpha: true,
        alpha: true,
        success: onSuccess,
      })
    } else if (/4\.1\.\d+/.test(versionString)) {
      new SpinePlayer4_1('player-container', {
        preserveDrawingBuffer: true,
        showControls: false,
        binaryUrl: skelUrl,
        atlasUrl: atlasUrl,
        animation: 'idle',
        premultipliedAlpha: true,
        alpha: true,
        success: onSuccess,
      })
    } else {
      console.error('Invalid version string:', versionString)
    }
  }

  useEffect(() => {
    fetchL2D(skelUrl)
  }, [])

  return (
    <div
      id="player-container"
      className="hidden md:block fixed bottom-0 right-4 z-50 w-64 h-64"
      ref={containerRef}
    />
  )
}
