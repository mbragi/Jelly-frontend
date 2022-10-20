import React from 'react'
import AdminFrame from '../../components/adminFrame/AdminFrame'
import Button from '../../components/button/Button'
import './AdminUsers.css'
function AdminUsers() {
  return (
    <AdminFrame currentPage={"users"}>
        <div className="admin-users-container">
            <header>
                <Button content={'Add Admin'} style ={{backgroundColor: ' rgba(53, 112, 236, 0.67)'}} />
            </header>
            <section>
                <header className='user-lists-header'>
                    <p>User List</p>
                </header>
                <div>

                </div>
            </section>
        </div>
    </AdminFrame>
  )
}

export default AdminUsers