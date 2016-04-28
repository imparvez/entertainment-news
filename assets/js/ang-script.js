var entertainmentNews = angular.module('entertainmentNews', ['ngSanitize']);


entertainmentNews.controller('bannerCtrl', ['$scope', function ($scope) {
	$scope.header = "Entertainment News and Updates";
	$scope.flashBanner = "https://in.bmscdn.com/webin/entertainment_news/entertainment_news.jpg";
}]);


entertainmentNews.controller('event-cards', ['$scope','$sce', function($scope, $sce){
	$scope.eventCards = [
		{
			"header": "Pinocchio and the Blue Fairy",
			"image": "https://in.bmscdn.com/in/Entertainment-news/kids-fantacy-plays-mumbai.jpg",
			"paragraph": "<p>As kids we all loved bedtime stories didn’t we? Very memorably, the adventures of Pinocchio was just one of our favourites.<br><br>Well, for those who have hazy memories, the story is of a boy Pinocchio, made out of wood by a toy maker named Geppetto. In one of the stories, Geppetto makes a puppet and wishes it to be a real boy. The Blue Fairy also called as wish fairy fulfils his wish and turns the wooden boy into a real boy, Pinocchio. But Pinocchio's heart will still remain of wood, till he proves himself to be an honest, kind and a good boy; and if he disobeys or tells a lie then his nose will grow and grow until he realizes his mistake. As Pinocchio steps out of his house he is misguided and manipulated by shrewd and cunning people and thus gets into trouble facing problems of a growing nose, turning into a donkey, getting robbed and also gulped by a whale.<br><br>Now this same adorable story is coming back as a musical. As one of the many <a href=\"https://in.bookmyshow.com/mumbai/plays\"><strong>plays in Mumbai</strong></a>  which are put up for all theatre lovers, this play is one of the most awaited for young and old alike. This play has been directed & created by one of the most sought after creative directors, Rashmi Sharma. Rashmi Sharma started her career as a Creative Director for various famous shows on Indian Television. She always had a craving for doing something big, creating something of her own. Thus began the journey of Rashmi Sharma Telefilms and since then there’s no looking back. She is a passionate producer who personally supervises and writes all her shows. With this kind of a record, there is no doubt that <a href=\"https://in.bookmyshow.com/plays/a-story-of-pinocchio-and-the-blue-fairy/ET00040146\"><strong>‘A Story of Pinocchio and The Blue Fairy'</strong></a> comes with a strong vision and backing too.<br><br> Being played at <a href=\"https://in.bookmyshow.com/venue/andheri-base-mumbai/SAMM\"><strong>Andheri Base in Mumbai</strong></a>, this show is open for public and the tickets are available on popular platforms like <a href=\"https://in.bookmyshow.com/mumbai/\"><strong>BookMyShow</strong></a> . With a stellar and much applauded cast, this is one play you should not miss if you have a kid in the house. In fact, you must not miss this, if you ever were a kid!<br><br> So what happens to Pinocchio? Will he prove to be a good boy? Or will he die with a long growing nose?Come and find out for yourself!<p>"
		}
	];
}]);