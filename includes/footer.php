

</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>



<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script>
    $(document).ready(function() {
        $(".sidemenu-toggler").click(function() {
            $(".sidemenu").addClass("active");
        });

        $(".close").click(function() {
            $(".sidemenu").removeClass("active");
        });
        $(".lastposthome").click(function() {
            $(".lastposthome").toggleClass("lastposthomeactive");
        });
    });
</script>

</html>