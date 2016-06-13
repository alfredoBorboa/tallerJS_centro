		$( '#nav li:has(ul)' ).each( function(){
			var curItem = false;

			$( this ).on( 'click', function( e ){
				var item = $( this );
				console.log( $( this ) );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});

			$( document ).on( 'click touchstart MSPointerDown', function( e ){
				var resetItem = true;
				var parents	  = $( e.target ).parents();
				//console.log( parents );
				for( var i = 0; i < parents.length; i++ ){
					if( parents[ i ] == curItem[ 0 ] ){
						resetItem = false;
					}
				}

				if( resetItem ){
					curItem = false;
				}

			});//document on click

		});//each para cada li con hijos ul
