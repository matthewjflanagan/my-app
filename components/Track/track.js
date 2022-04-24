import Image from 'next/image';

export default function Track({ track }) {
    console.log(track)
    console.log(track.artists);
  return (
    <li key={track.id}>
        {track.artists.map(artist => artist.name)} - {track.album.name}
        <Image 
        src={track.album.images[2].url}
        height={track.album.images[2].height}
        width={track.album.images[2].width}
        alt={track.name}
        layout="responsive" />
    </li>
  )
}
