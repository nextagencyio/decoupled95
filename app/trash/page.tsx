import DC95Window from '../components/DC95Window'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trash - Decoupled95',
  description: 'You really want to look through the trash?',
}

interface TrashFile {
  name: string
  type: 'doc' | 'exe' | 'txt' | 'bmp' | 'wav' | 'xls' | 'html' | 'zip' | 'dll'
  size: string
  deleted: string
  origin: string
}

const trashFiles: TrashFile[] = [
  {
    name: 'my_startup_idea_v47_FINAL_FINAL2_revised.doc',
    type: 'doc',
    size: '24 KB',
    deleted: '3/14/1999 2:30 AM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'definitely_not_a_virus.exe',
    type: 'exe',
    size: '666 KB',
    deleted: '6/6/1999 6:06 PM',
    origin: 'C:\\Downloads\\',
  },
  {
    name: 'todo_list_1997_still_not_done.txt',
    type: 'txt',
    size: '1 KB',
    deleted: '12/31/1998 11:59 PM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'screenshot_of_my_neopets.bmp',
    type: 'bmp',
    size: '2,400 KB',
    deleted: '8/22/1999 4:15 PM',
    origin: 'C:\\My Documents\\My Pictures\\',
  },
  {
    name: 'free_ram_download.exe',
    type: 'exe',
    size: '32 KB',
    deleted: '5/1/1999 10:00 AM',
    origin: 'C:\\Downloads\\',
  },
  {
    name: 'budget_spreadsheet_DO_NOT_OPEN.xls',
    type: 'xls',
    size: '156 KB',
    deleted: '9/5/1998 9:45 AM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'my_geocities_page_backup.html',
    type: 'html',
    size: '89 KB',
    deleted: '7/19/1999 3:20 PM',
    origin: 'C:\\Websites\\',
  },
  {
    name: 'horse_midi.wav',
    type: 'wav',
    size: '4,200 KB',
    deleted: '2/14/1999 8:00 PM',
    origin: 'C:\\My Documents\\My Music\\',
  },
  {
    name: 'resume_HIRE_ME_PLEASE.doc',
    type: 'doc',
    size: '45 KB',
    deleted: '11/3/1998 5:30 PM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'y2k_survival_guide_v3.txt',
    type: 'txt',
    size: '12 KB',
    deleted: '12/28/1999 7:00 AM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'bonzi_buddy_installer.exe',
    type: 'exe',
    size: '1,024 KB',
    deleted: '4/1/1999 12:00 PM',
    origin: 'C:\\Downloads\\',
  },
  {
    name: 'all_my_bookmarks_netscape.html',
    type: 'html',
    size: '340 KB',
    deleted: '10/10/1999 2:00 PM',
    origin: 'C:\\Program Files\\Netscape\\',
  },
  {
    name: 'AIM_chat_log_xXxDarkAngelxXx.txt',
    type: 'txt',
    size: '203 KB',
    deleted: '6/15/1999 11:30 PM',
    origin: 'C:\\My Documents\\',
  },
  {
    name: 'cool_cursor_pack_2.zip',
    type: 'zip',
    size: '890 KB',
    deleted: '3/3/1999 4:00 PM',
    origin: 'C:\\Downloads\\',
  },
  {
    name: 'IMPORTANT_SYSTEM32_backup.dll',
    type: 'dll',
    size: '512 KB',
    deleted: '1/2/1999 8:15 AM',
    origin: 'C:\\WINDOWS\\SYSTEM32\\',
  },
  {
    name: 'LOL_dancing_baby.bmp',
    type: 'bmp',
    size: '3,100 KB',
    deleted: '7/4/1999 1:00 PM',
    origin: 'C:\\My Documents\\Funny Stuff\\',
  },
]

function FileIcon({ type }: { type: TrashFile['type'] }) {
  switch (type) {
    case 'doc':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1" width="12" height="14" fill="white" stroke="#000080" strokeWidth="0.5" />
          <rect x="2" y="1" width="12" height="3" fill="#000080" />
          <rect x="4" y="6" width="8" height="1" fill="#808080" />
          <rect x="4" y="8" width="7" height="1" fill="#808080" />
          <rect x="4" y="10" width="8" height="1" fill="#808080" />
          <rect x="4" y="12" width="5" height="1" fill="#808080" />
        </svg>
      )
    case 'exe':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
          <rect x="4" y="4" width="8" height="4" fill="#000080" />
          <rect x="5" y="5" width="2" height="2" fill="#00FF00" />
          <rect x="9" y="5" width="2" height="2" fill="#FF0000" />
          <rect x="4" y="10" width="8" height="2" fill="#808080" />
        </svg>
      )
    case 'txt':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1" width="12" height="14" fill="white" stroke="#808080" strokeWidth="0.5" />
          <rect x="4" y="3" width="8" height="1" fill="#000000" />
          <rect x="4" y="5" width="7" height="1" fill="#000000" />
          <rect x="4" y="7" width="8" height="1" fill="#000000" />
          <rect x="4" y="9" width="5" height="1" fill="#000000" />
          <rect x="4" y="11" width="8" height="1" fill="#000000" />
        </svg>
      )
    case 'bmp':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" fill="white" stroke="#808080" strokeWidth="0.5" />
          <rect x="3" y="8" width="3" height="5" fill="#00AA00" />
          <rect x="6" y="6" width="3" height="7" fill="#008800" />
          <rect x="9" y="9" width="3" height="4" fill="#00AA00" />
          <circle cx="10" cy="5" r="2" fill="#FFFF00" />
        </svg>
      )
    case 'wav':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" fill="#c0c0c0" stroke="#808080" strokeWidth="0.5" />
          <path d="M4 8 L5 5 L6 10 L7 4 L8 11 L9 6 L10 9 L11 7 L12 8" stroke="#000080" strokeWidth="1" fill="none" />
        </svg>
      )
    case 'xls':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1" width="12" height="14" fill="white" stroke="#008000" strokeWidth="0.5" />
          <rect x="2" y="1" width="12" height="3" fill="#008000" />
          <rect x="3" y="5" width="4" height="3" stroke="#808080" strokeWidth="0.3" fill="none" />
          <rect x="7" y="5" width="4" height="3" stroke="#808080" strokeWidth="0.3" fill="none" />
          <rect x="3" y="8" width="4" height="3" stroke="#808080" strokeWidth="0.3" fill="none" />
          <rect x="7" y="8" width="4" height="3" stroke="#808080" strokeWidth="0.3" fill="none" />
        </svg>
      )
    case 'html':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1" width="12" height="14" fill="white" stroke="#808080" strokeWidth="0.5" />
          <text x="8" y="11" textAnchor="middle" fill="#0000FF" fontSize="7" fontWeight="bold">&lt;/&gt;</text>
        </svg>
      )
    case 'zip':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" fill="#FFF8DC" stroke="#808000" strokeWidth="0.5" />
          <rect x="7" y="2" width="2" height="2" fill="#808000" />
          <rect x="7" y="5" width="2" height="2" fill="#808000" />
          <rect x="7" y="8" width="2" height="2" fill="#808000" />
          <rect x="6" y="10" width="4" height="3" fill="#808000" stroke="#000000" strokeWidth="0.3" />
        </svg>
      )
    case 'dll':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
          <rect x="4" y="4" width="3" height="3" fill="#000080" />
          <rect x="9" y="4" width="3" height="3" fill="#000080" />
          <rect x="4" y="9" width="3" height="3" fill="#000080" />
          <rect x="9" y="9" width="3" height="3" fill="#000080" />
        </svg>
      )
  }
}

export default function TrashPage() {
  return (
    <DC95Window
      title="Trash"
      menuItems={['File', 'Edit', 'View', 'Help']}
    >
      <div className="font-['Tahoma',_'Arial',_sans-serif] text-[14px]">
        {/* Toolbar */}
        <div
          className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0]"
          style={{ borderBottom: '1px solid #808080' }}
        >
          <button className="dc95-button text-[13px] px-3">Empty Trash</button>
          <button className="dc95-button text-[13px] px-3">Restore All</button>
          <div className="ml-auto text-[13px] text-[#808080]">
            {trashFiles.length} object(s)
          </div>
        </div>

        {/* Column headers */}
        <div
          className="grid bg-[#c0c0c0] text-[13px] font-bold select-none"
          style={{
            gridTemplateColumns: '24px 1fr 60px 80px 140px 1fr',
            borderBottom: '2px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
          }}
        >
          <div className="px-1 py-[2px]"></div>
          <div
            className="px-2 py-[2px]"
            style={{
              border: '1px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
            }}
          >
            Name
          </div>
          <div
            className="px-2 py-[2px]"
            style={{
              border: '1px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
            }}
          >
            Size
          </div>
          <div
            className="px-2 py-[2px]"
            style={{
              border: '1px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
            }}
          >
            Type
          </div>
          <div
            className="px-2 py-[2px]"
            style={{
              border: '1px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
            }}
          >
            Date Deleted
          </div>
          <div
            className="px-2 py-[2px]"
            style={{
              border: '1px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
            }}
          >
            Original Location
          </div>
        </div>

        {/* File list */}
        <div className="bg-white">
          {trashFiles.map((file, index) => (
            <div
              key={index}
              className="grid items-center text-[13px] hover:bg-[#000080] hover:text-white cursor-default group"
              style={{
                gridTemplateColumns: '24px 1fr 60px 80px 140px 1fr',
              }}
            >
              <div className="px-1 py-[1px] flex items-center justify-center">
                <FileIcon type={file.type} />
              </div>
              <div className="px-2 py-[1px] truncate">{file.name}</div>
              <div className="px-2 py-[1px] text-right">{file.size}</div>
              <div className="px-2 py-[1px] uppercase">{file.type}</div>
              <div className="px-2 py-[1px]">{file.deleted}</div>
              <div className="px-2 py-[1px] truncate text-[#808080] group-hover:text-white">
                {file.origin}
              </div>
            </div>
          ))}
        </div>

        {/* Funny disclaimer at bottom */}
        <div
          className="p-3 bg-[#c0c0c0] text-[12px] text-[#808080] text-center"
          style={{
            borderTop: '1px solid #808080',
          }}
        >
          Tip: Are you sure you want to permanently delete &quot;IMPORTANT_SYSTEM32_backup.dll&quot;? Your computer may not start correctly.
        </div>
      </div>
    </DC95Window>
  )
}
