<?php

// define constant
define('MY_CALLS', ['select_driver', 'select_car', 'update_car', 'insert_car', 'delete_car', 'select_car_order_make', 'select_car_order_model']);

// Error handling // set to the user defined error handlers
function handle_exception($exception) {
  header($_SERVER['SERVER_PROTOCOL'].' 500 Internal Server Error');
  echo json_encode(['data'=>[], 
    'exception'=>[
      'message'=>$exception->getMessage(),
      'file'=>$exception->getFile(),
      'line'=>$exception->getLine(),
      'trace'=>$exception->getTrace(),
    ]
  ]);
  exit; // (1);
}
function handle_error($errno, $errstr, $errfile, $errline){
  handle_exception( new ErrorException($errstr, 0, $errno, $errfile, $errline) );
  // if (!(error_reporting() & $errno)) {
  //   // This error code is not included in error_reporting, so let it fall
  //   // through to the standard PHP error handler
  //   return false;
  // }
  // switch ($errno) {
  // case E_USER_ERROR:
  //   // echo "<b>My ERROR</b> [$errno] $errstr<br />\n";
  //   break;
  // case E_USER_WARNING:
  //   // echo "<b>My WARNING</b> [$errno] $errstr<br />\n";
  //   break;
  // case E_USER_NOTICE:
  //   // echo "<b>My NOTICE</b> [$errno] $errstr<br />\n";
  //   break;
  // default:
  //   // echo "Unknown error type: [$errno] $errstr<br />\n";
  //   break;
  // }
  // /* Don't execute PHP internal error handler */
  // return true;
}
function handle_shutdown(){
  $error = error_get_last();
  if ( $error && $error['type']== E_ERROR ){
    handle_error( $error['type'], $error['message'], $error['file'], $error['line'] );
  }
}

// Process requests
// function process_input(){
  //   $json = file_get_contents('php://input');
  //   return json_decode($json, true);
  // }
function process_request(){
  // register handlers
  set_exception_handler('handle_exception');
  set_error_handler('handle_error');
  register_shutdown_function('handle_shutdown');
  
  // process input // $input = process_input();
  $json = file_get_contents('php://input');
  $input = json_decode($json, true);
  // validate call
  if( in_array($input['call'], MY_CALLS) ){
    $sql = file_get_contents("../private/sql/{$input['call']}.sql");
  } else{ // throw new Exception('Invalid call');
    throw new Exception('Invalid call');
    // trigger_error(json_encode(['data'=>null, 'exception'=>'Invalid call']), E_USER_ERROR);
    // header($_SERVER['SERVER_PROTOCOL'].' 500 Internal Server Error');
    // echo json_encode(['data'=>null, 'exception'=>'Invalid call']);
    // exit;
  }

  // get data
  $conf = parse_ini_file('../private/conf/db_user.ini');
  $pdo = new PDO(
    "mysql:host={$conf['host']};dbname={$conf['dbname']};charset={$conf['charset']}",
    $conf['user'],
    $conf['password'],
    [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_EMULATE_PREPARES => FALSE, ]
  );
  $query = $pdo->prepare($sql);
  $query->execute($input['args']);   
  $data = $query->fetchall(PDO::FETCH_ASSOC);
  // respond
  echo json_encode(['data'=>$data, 'exception'=>null]);
  exit;
}

process_request();

?>  