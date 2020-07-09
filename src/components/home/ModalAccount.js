import React, { Component } from 'react'

export default class ModalAccount extends Component {
  render() {
    return (
      <div className="modal account-area edit-modal fade" id="AccountModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Edit user</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
            <form className="account-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="taiKhoan">Account</label><br />
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Enter Your Account"
                    id="taiKhoan"
                    name="taiKhoan"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Name</label><br />
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Enter Your Name"
                    id="hoTen"
                    name="hoTen"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label><br />
                  <input
                    type="email"
                    className="w-100"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="soDt">Phone</label><br />
                  <input
                    type="phone"
                    className="w-100"
                    placeholder="Enter Your Phone"
                    id="soDt"
                    name="soDt"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="matKhau">Password</label><br />
                  <input
                    type="password"
                    className="w-100"
                    placeholder="Password"
                    id="matKhau"
                    name="matKhau"
                    required
                  />
                </div>

                <div className="form-group checkbox checkgroup">
                  {/* <input type="checkbox" id="bal" required checked> */}
                  <label htmlFor="bal"><input type="checkbox" className="mr-2" defaultValue id="bal" style={{ height: 'auto' }} required />I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    defaultValue="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
