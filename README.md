# DEVELOPMENT-TOOLS-GET-A-PLUS

## Commit Template
  
  ใส่ Tag ด้านหน้า Description แล้วใส่ Note รายละอียดไว้ด้านหลัง 
  
  ### Template
    
    [Tag] : Description
    
  ### Example
    
    fix: prevent racing of requests
    
## Commit Message
* `add` เพื่มไฟล์หรือสร้างไฟล์ใหม่
* `delete` ลบไฟล์ที่ไม่จำเป็นออก
* `fix` แก้ไขBugที่พบ
* `feat` เพื่มFeatureใหม่
* `doc` เพื่มDocumentใหม่
* `test` ทดสอบระบบและทดลองทำอะไรต่างๆ
* `update` Updateไฟล์ที่มีอยู่แล้ว
* `refact` แก้ไขให้สวยงามและเข้าใจมากขึ้น
* `perf` เเก้ไขให้ประสิทธิภาพดีขึ้น

## Branch
* `main` เป็นbranchหลักสำหลัดโปรเจค
* `feature` เป็นbranchที่สร้างมาเพื่อทำfeatureหนึ่งๆแล้วเมื่อเสร็จสิ้นจะmergeกับmainแล้วจะหายไป
* `develop` เป็นbranchที่เป็นก่อนขึ้นmain

## Work Process
1.`Fork repository` จากหน้าหลักมาใน repository ของสมาชิกแต่ละบุคคล  
2.`Clone repository` จาก github ลงเครื่องคอมพิวเตอร์ของแต่ละบุคคล และทำการแก้ไขโค้ดหรือเพิ่มโค้ดตามความต้องการ  
2.`Push` โค้ดที่ทำการแก้ไขแล้วลง github  
4.`Pull request` ไปที่ repository หลักและทำการขออนุญาตเพื่อเข้าไปใน repository หลัก  
5.Reviewer ทำการรีวิว pull request และทำการ merge   
6.หาก Reviewer ไม่สามารถให้ผ่านต้องมีการ request change เพื่อนำกลับไปแก้ไข  
