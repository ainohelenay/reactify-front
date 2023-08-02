/**
* Grid With Title Bar
*/
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';

// data File
import tileData from './tileData';

function ImageGridList(props) {
	return (
		<div>
			<Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={450}>
				<ImageList>
					{tileData.map(tile => (
						<ImageListItem key={tile.img}>
							<img src={tile.img} alt={tile.title} />
							<ImageListItemBar title={tile.title} subtitle={<span>by: {tile.author}</span>}
								actionIcon={<IconButton> <i className="zmdi zmdi-share text-white"></i> </IconButton>} />
						</ImageListItem>
					))}
				</ImageList>
			</Scrollbars>
		</div>
	);
}

export default ImageGridList;
