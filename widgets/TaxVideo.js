import Script from 'next/script'
const TaxVideo = () => {
    return (
      <>
        <Script id="show-banner" strategy="lazyOnload">
        {`
            setTimeout(function(){
      var oScript = document.createElement("script");
                       oScript.src = "https://widget.resourcesforclients.com/taxvid/tv.js?u=EWQnSrF7zKH2";
      document.getElementById("widget").appendChild(oScript);
    },8000)
    //Opens up the playlist video list
    setTimeout(function(){
      if ($("#ccc-vidsvc-wrapper-playlist").is(":hidden")) {
        $("#ccc-vidsvc-wrapper-playlist").removeClass('hidden').slideDown("slow");
          $("#ccc-vidsvc-playlist-arrow").addClass("fa-rotate-90");
          $("#ccc-vidsvc-wrapper-player").addClass("move-left");

        }
      },20000);
        `}
        </Script>
        <section class="container pb-50" id="widget"></section>
      </>
    );
}

export default TaxVideo
