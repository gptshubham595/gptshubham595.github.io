
<?php include('index.php') ?>

<!DOCTYPE html>
<html>
 <head>
  <title>Registeration Portal</title><!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Fonts Icon CSS -->
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/et-line.css" rel="stylesheet">
    <link href="assets/css/ionicons.min.css" rel="stylesheet">
    <!-- Carousel CSS -->	
    <link href="assets/css/owl.carousel.min.css" rel="stylesheet">
    <link href="assets/css/owl.theme.default.min.css" rel="stylesheet">
    <!-- Animate CSS -->
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <!-- Custom styles for this template -->
    <link href="assets/css/main.css" rel="stylesheet">
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  
 </head>
 <body>
 
  <br />
  <div class="container">
   
   <br />
   <div class="col-md-6" style="margin:0 auto; float:none;">
    <form method="post">
     <h3 align="center">Registeration Form</h3>
     <br />
     <?php echo $error; ?>
	 
<section class="pt100 pb100">
    <div class="container">
     <div class="form-group">
      <label>Enter Name</label>
      <input type="text" name="name" placeholder="Enter Name" align="center" required="required" class="form-control" value="<?php echo $name; ?>" />
     </div>
     <div class="form-group">
      <label>Enter Email</label>
      <input type="email" name="email" class="form-control" align="center" placeholder="Enter Email" required="required" value="<?php echo $email; ?>" />
     </div>
     <div class="form-group">
      <label>Enter Contact No.</label>
      <input type="number" name="phone" min="1111111111" max="9999999999" class="form-control" align="center" maxlength="10" placeholder="Enter Contact No." required="required"  value="<?php echo $phone; ?>" />
     </div>
	 <div class="form-group">
	 
      <input name="radiobutton" type="radio" align="center"  id="slot1" value="SLOT 1" checked/>SLOT 1 <br >
	</div>	 
	 <div class="form-group">
	 
	  <input name="radiobutton" type="radio" align="center"  id="slot2" value="SLOT 2"/>SLOT2<br >
	</div>
     <div class="form-group" align="center" class="btn btn-primary btn-rounded">
     
	       <input type="submit" name="submit" class="btn btn-rounded btn-primary"  value="Submit" />
    </div>
    </form>
   </div>
  </div>
 </body>
</html>