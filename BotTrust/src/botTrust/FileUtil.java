package botTrust;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;

/**
 * A utility class handling file 
 * 
 *
 */
public class FileUtil {	

	/**
	 * Open(if not existing, then create) one file
	 * 
	 * @param dstPath
	 * 		The file path
	 * @param readable
	 * 		True = open the file as readable. False = not readable. Null = Just open not setting any.
	 * @param writable
	 * 		True = open the file as writable. False = not writable. Null = Just open not setting any.
	 * @param executable
	 * 		True = open the file as executable. False = not executable. Null = Just open not setting any.
	 * @param ownerOnly
	 * 		True = open the file as owner only. False = not owner only. Null = True.
	 * @return
	 * 		One File object associated with the opened file
	 * @throws IOException 
	 */
	public static File openFile(String dstPath, Boolean readable, Boolean writable, Boolean executable, Boolean ownerOnly) throws IOException {
		// Open the file
		File f = new File(dstPath);
		if (!f.exists()) {
			
			if (!f.getParentFile().mkdirs()) {
				throw new IOException("Fail to make the dirs for the file path: " + dstPath + "!");
			}
			
			f.createNewFile();
		}	
		
		Boolean _ownerOnly = (ownerOnly == null) ? true : ownerOnly;
		
		if (readable != null) {
			f.setReadable(readable, _ownerOnly);
		}
		
		if (writable != null) {
			f.setWritable(writable, _ownerOnly);
		}
		
		if (executable != null) {
			f.setExecutable(executable, _ownerOnly);
		}		
		
		return f;
	}
	
	/**
	 * Equal to the invocation of openFile(dstPath, null, null, null, null) 
	 * 
	 * @param dstPath
	 * 		Refer to openFile(String dstPath, Boolean readable, Boolean writable, Boolean executable, Boolean ownerOnly)
	 * @return
	 * 		Refer to openFile(String dstPath, Boolean readable, Boolean writable, Boolean executable, Boolean ownerOnly)
	 * @throws IOException
	 */
	public static File openFile(String dstPath) throws IOException {
		return FileUtil.openFile(dstPath, null, null, null, null);
	}
	
	/**
	 * Buffer the File object for writing
	 * 
	 * @param f
	 * 		The File object to be buffered
	 * @param charsetName
	 * 		Refer to java.io.OutputStreamWriter
	 * @return
	 * 		One BufferedWriter object
	 * @throws FileNotFoundException
	 * @throws UnsupportedEncodingException
	 */
	public static BufferedWriter bufferFileWriter(File f,  String charsetName) throws UnsupportedEncodingException, FileNotFoundException {
			BufferedWriter  bw = new BufferedWriter(
									new OutputStreamWriter(new FileOutputStream(f), charsetName)
								 );    			
			return bw;
	}
	
	/**
	 * Equal to bufferFileWriter(File f,  String charsetName) but take UTF8 as the supported charset
	 * 
	 * @param f
	 * 		Refer to bufferFileWriter(File f,  String charsetName)
	 * @return
	 * 		Refer to bufferFileWriter(File f,  String charsetName)
	 * @throws UnsupportedEncodingException
	 * @throws FileNotFoundException
	 */
	public static BufferedWriter bufferFileWriter(File f) throws UnsupportedEncodingException, FileNotFoundException {
		return FileUtil.bufferFileWriter(f, "UTF8");
	}

	/**
	 * Buffer the File object for reading
	 * 
	 * @param f
	 * 		The File object to be buffered
	 * @param charsetName
	 * 		Refer to java.io.InputStreamReader
	 * @return
	 * 		One BufferedReader object
	 * @throws FileNotFoundException 
	 * @throws UnsupportedEncodingException 
	 */
	public static BufferedReader bufferFileReader(File f, String charsetName) throws UnsupportedEncodingException, FileNotFoundException {
		BufferedReader br = new BufferedReader(
								 new InputStreamReader(new FileInputStream(f), charsetName)
							 );
		return br;
	}
	
	/**
	 * Like bufferFileReader(File f, String charsetName) but take UTF-8 as the supported charset
	 * 
	 * @param f
	 * 		Refer to bufferFileReader(File f, String charsetName)
	 * @return
	 * 		Refer to bufferFileReader(File f, String charsetName)
	 * @throws UnsupportedEncodingException
	 * @throws FileNotFoundException
	 */
	public static BufferedReader bufferFileReader(File f) throws UnsupportedEncodingException, FileNotFoundException {
		return FileUtil.bufferFileReader(f, "UTF8");
	}	

	/**
	 * Delete one file or one directory(including all stuff inside)
	 * 
	 * @param f
	 * 		The File object to be deleted
	 */
	public static void deleteFile(File f) {
		
		if (f.isDirectory()) {
			
    		// directory is empty, then delete it
    		if(f.list().length==0){
 
    		   f.delete();
 
    		}else{
 
    		   // list all the directory contents
        	   String files[] = f.list();
 
        	   for (String temp : files) {
        	      // construct the file structure
        	      File fileDelete = new File(f, temp);
 
        	      // recursive delete
        	      FileUtil.deleteFile(fileDelete);
        	   }
 
        	   // check the directory again, if empty then delete it
        	   if(f.list().length==0){
           	     f.delete();
        	   }
    		}			
			
		} else {
			
			f.delete();					
		}
	}

	/**
	 * Do the same as deleteFile(File f)
	 * 		
	 * @param path
	 * 		The path to the file to be deleted
	 * @throws IOException 
	 */
	public static void deleteFile(String path) throws IOException {
		
		File f = new File(path);    		
		   			
		if (f.exists()) {
			FileUtil.deleteFile(f);
		} else {
			throw new IOException(path + " -> No such file or dir to delete!");
		}
	}

}
